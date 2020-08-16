import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  MonthView
} from '@devexpress/dx-react-scheduler-material-ui';

const schedulerData = [
  { startDate: '2020-08-16T09:45', endDate: '2020-08-16T11:00', title: 'Booked' },
  { startDate: '2020-08-16T11:00', endDate: '2020-08-16T11:30', title: 'Booked' },
  { startDate: '2020-08-16T14:00', endDate: '2020-08-16T14:30', title: 'Booked' },
  { startDate: '2020-08-16T15:00', endDate: '2020-08-16T15:30', title: 'Booked' },
  { startDate: '2020-08-17T12:00', endDate: '2020-08-17T13:30', title: 'Go to a gym' },
];

export default()=> {
    let date = new Date();
    let month = date.getMonth() + 1 ;
    const currentDate = '"'+date.getFullYear()+'-'+month+'-'+date.getDate()+'"';
    console.log(currentDate);
    return (
      <Paper>
        <Scheduler
          data={schedulerData}
          height={660}
        >
          <ViewState
            defaultCurrentDate={currentDate}
            defaultCurrentViewName="Week"
          />

          <DayView
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={9}
            endDayHour={18}
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <ViewSwitcher />
        </Scheduler>
      </Paper>
    );
}

