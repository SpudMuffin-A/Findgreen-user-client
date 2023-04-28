import { Bar } from 'react-chartjs-2';

export default function BarChart(props) {
  const { data, options } = props;

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}


export const doughnutLegends = [
  { title: 'AC Type 1', color: 'bg-blue-500' },
  { title: 'AC Type 2', color: 'bg-orange-600' },
  { title: 'CCS-1', color: 'bg-purple-600' },
  { title: 'CCS-2', color: 'bg-teal-600' },
]

export const lineLegends = [
  { title: 'Organic', color: 'bg-teal-600' },
  { title: 'Paid', color: 'bg-purple-600' },
]

export const lineLegends1 = [
  { title: 'Organic', color: 'bg-teal-600' },
  { title: 'Paid', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'On-going', color: 'bg-purple-600' },
  { title: 'Completed', color: 'bg-blue-500' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [27, 32, 30, 11],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#3B7CFF', '#FF4A55', '#E328AF', '#008080'],
        label: 'Dataset 1',
      },
    ],
    labels: ['AC Type 1', 'AC Type 2', 'CCS-1', 'CCS-2'],
  },
  options: {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,

        }
    },
  },
},
}

export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Organic',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: 'Paid',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
  options: {
    responsive: true,
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
    elements: {
      line: {
        tension: 0.3
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: false,
      },
    }
  },
}

export const barOptions = {
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'On-going',
        backgroundColor: '#C223E9',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Completed',
        backgroundColor: '#3B7CFF',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    }
  },
}

export const lineOptions1 = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'On-going',
        backgroundColor: '#3B7CFF',
        borderColor: "#000000",
        // borderColor: window.chartColors.black,
        borderWidth: 2,
        borderDash: [10, 10],
        data: [3, 14, 52, 74, 33, 90, 70, 3, 14, 52, 74, 33],
        pointRadius: 9,
      },
      // {
      //   label: 'Completed',
      //   backgroundColor: '#3B7CFF',
      //   // borderColor: window.chartColors.blue,
      //   borderWidth: 1,
      //   data: [66, 33, 43, 12, 54, 62, 84],
      // },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    }
  },
}


export const barChartOptions = {
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'On-going',
        backgroundColor: '#C223E9',
        
        borderWidth: 1,
        data: [18, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Completed',
        backgroundColor: '#3B7CFF',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  },
};