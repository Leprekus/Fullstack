import { type Point, type ChartData } from "chart.js"

interface IDatasets {
    [key: string] : {
      [key: string] : ChartData<"line", (number | Point | null)[], unknown> 
    }
    

    
    
}
export const datasets: IDatasets = {
    'Impressions' : {
      'Today' : {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00'],
        datasets: [
          {
            label: 'Before',
            data: [110, 80, 60, 80, 115, 90, 50],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [220, 150, 190, 230, 220, 195, 210],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      },
    'This Week': {
        labels: ['Mon','Tues','Wed','Thu','Fri','Sat','Sun',],
        datasets: [
          {
            label: 'Before',
            data: [50, 130, 60, 97, 74, 131, 71],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [210, 145, 189, 245, 221, 219, 229],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      },
    'This Month': {
        labels: ['Mon','Tues','Wed','Thu','Fri','Sat','Sun',],
        datasets: [
          {
            label: 'Before',
            data: [88, 110, 66, 150, 90, 67, 89],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [209, 215, 195, 189, 239, 209, 239],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
    'Clicks': {
      'Today' : {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00'],
        datasets: [
          {
            label: 'Before',
            data: [100, 75, 50, 90, 120, 80, 60],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [200, 150, 180, 250, 220, 190, 210],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      },
    'This Week': {
        labels: ['Mon','Tues','Wed','Thu','Fri','Sat','Sun',],
        datasets: [
          {
            label: 'Before',
            data: [80, 120, 50, 90, 70, 110, 60],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [200, 140, 180, 240, 220, 200, 215],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      },
    'This Month': {
        labels: ['Mon','Tues','Wed','Thu','Fri','Sat','Sun',],
        datasets: [
          {
            label: 'Before',
            data: [70, 100, 60, 110, 80, 65, 85],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            
          },
          {
            label: 'After',
            data: [210, 220, 190, 180, 240, 200, 230],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
    
}
