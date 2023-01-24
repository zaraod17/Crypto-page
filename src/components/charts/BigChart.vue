<template>
  <canvas id="myChart" width="400"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Chart, { ChartConfiguration, ChartItem, ChartData } from "chart.js/auto";

export default defineComponent({
  setup() {
    const labels = ["1 May", "2 May", "3 May", "4 May", "5 May"];

    const data: ChartData = {
      labels: labels,
      datasets: [
        {
          label: "This month",
          backgroundColor: "rgba(159, 124, 224, 0.322)",
          borderColor: "#7445FB",
          pointStyle: "circle",
          pointRadius: 3,
          pointHoverRadius: 4,
          data: [0, 5, 10, 5, 20, 25, 30],
          tension: 0.3,
          fill: true,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
            labels: {
              borderRadius: 6,
              useBorderRadius: true,
              usePointStyle: true,
            },
          },
        },
      },
    };

    onMounted(() => {
      const canvasTag = document.getElementById("myChart") as ChartItem;
      new Chart(canvasTag, config);
    });

    return {};
  },
});
</script>
