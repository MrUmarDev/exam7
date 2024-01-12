import { defineStore } from 'pinia';
import {
  apifetchAdmins,
  apifetchStudent,
  apifetchStudents,
  apifetchTeachers,
  apifetchSingleTeacher,
  apifetchGroups
} from '@/api/admin';
import { errorToast } from '@/utils/toast';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    admins: [],
    user: null,
    students: [],
    teachers: [],
    singleTeacher: {},
    loading: false,
    groups: []
  }),
  actions: {
    async getAdmins() {
      this.loading = true;
      try {
        const res = await apifetchAdmins();
        if (!res.data?.admins && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.admins = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getStudentList() {
      this.loading = true;
      try {
        const res = await apifetchStudents();
        if (!res?.data?.users && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.students = res.data.user;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleStudent(id: number | string) {
      this.loading = true;
      try {
        const res = await apifetchStudent(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.user = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    //Teachers
    async fetchTeacherList() {
      this.loading = true;
      try {
        const res = await apifetchTeachers();
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.teachers = res?.data?.users;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    async getSingleTeacher(id: number | string) {
      this.loading = true;
      try {
        const res = await apifetchSingleTeacher(id);

        if (!res.data && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.singleTeacher = res.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },

    //Groups
    async getGroupList() {
      this.loading = true;
      try {
        const res = await apifetchGroups();
        if (!res?.data?.groups && res.status !== 200) {
          return;
        }
        this.loading = false;
        this.groups = res.data?.groups;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    }
  }
});
