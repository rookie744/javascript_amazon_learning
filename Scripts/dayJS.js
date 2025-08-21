import dayJS from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function isWeekend(date)
{
  const get_date = dayJS(date);
  console.log(get_date.format('dddd'));
  if (get_date.format('dddd') === 'Sunday' || get_date.format('dddd') === 'Saturday')
  {
    return 'Y';
  }
  else
  {
    return 'N';
  };  
};

export function calculate_delivery_date (days_to_added,startdate)
{
  let date = dayJS(startdate);
    while (days_to_added > 0)
    {
      date = date.add(1,'day');
      let dayofweek = date.day();
      if (dayofweek !== 0 && dayofweek !== 6)
      {
        days_to_added --;
      }
    }
    return date;
};
