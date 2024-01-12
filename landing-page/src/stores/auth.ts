import { defineStore } from 'pinia';
import { signin } from '@/api/auth';
import { errorToast } from '@/utils/toast';
import decodeJwt from '@/functions/tokenParser';
import router from '@/router';
import { RT_LOGIN } from '@/constants/routes/auth';
import { loginCredentials } from '@/modules/types';
import { user } from '@/modules/types';
import { personData } from '@/modules/interfaces';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null as user | null,
      loading: false
    };
  },
  actions: {
    async login(payload: loginCredentials) {
      try {
        this.loading = true;
        const res = await signin(payload);
        if (res?.data?.status !== 200) {
          return;
        }
        this.loading = false;
        if (!res?.data?.person.is_active) {
          errorToast('User deactivated by admins');
          return;
        }

        const decodedJwt = decodeJwt(res?.data?.token);

        if (decodedJwt.is_super_admin) {
          router.replace('/director');
          this.saveUser(res?.data);
          return;
        }
        if (decodedJwt.is_admin) {
          router.replace('/admin');
          this.saveUser(res?.data);
          return;
        }
        if (decodedJwt.is_teacher) {
          router.replace('/teacher');
          this.saveUser(res?.data);
          return;
        }
        if (decodedJwt.is_student) {
          router.replace('/student');
          this.saveUser(res?.data);
          return;
        }
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    },
    saveUser(data: personData) {
      localStorage.setItem('access_token', data?.token);
      this.user = data?.person;
    },
    clearUser() {
      localStorage.removeItem('access_token');
      this.user = null;
      router.replace({ name: RT_LOGIN });
    }
  }
});
