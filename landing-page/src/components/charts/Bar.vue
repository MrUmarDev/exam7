<template>
  <Bar
    id="my-chart-id"
    :options="chartDatas.chartOptions"
    :data="chartDatas.chartData"
    style="color: red"
  />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

import { reactive } from 'vue';

type dataSetObj = {
  label?: string;
  data?: number[];
  borderColor?: string;
  backgroundColor?: string;
};
type chartOptionsObj = {
  responsive?: boolean;
};

interface chartData {
  labels: string[];
  datasets: dataSetObj[];
}

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartDatas = reactive<{
  chartData: chartData;
  chartOptions: chartOptionsObj;
}>({
  chartData: {
    labels: ['January', 'February'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5'
      },
      {
        label: 'Dataset 2',
        data: [2, 3, 4],
        borderColor: '#FF6384',
        backgroundColor: '#FFB1C1'
      }
    ]
  },
  chartOptions: {
    responsive: true
  }
});
</script>
