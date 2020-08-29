/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Item, Label } from '../Item';
import { Content } from '../Layout/Content';
import { Footer } from '../Layout/Footer';
import { Header } from '../Layout/Header';
import { Page } from '../Layout/Page';
import { Toolbar } from '../Layout/Toolbar';
import { ToolbarTitle } from '../Layout/Toolbar';
import { Picker } from '.';
import { DatetimePicker } from '.';

export default {
  title: 'Picker',
  component: Picker,
};

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

export const All = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
    <Page>
      <Header>
        <Toolbar>
          <ToolbarTitle>DatetimePicker Examples</ToolbarTitle>
        </Toolbar>
      </Header>
      <Content>
        <Item>
          <Label>MMMM</Label>
          <DatetimePicker
            displayFormat="MMMM"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>MM DD YY</Label>
          <DatetimePicker
            displayFormat="MM DD YY"
            placeholder="Select Date"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>Disabled</Label>
          <DatetimePicker
            id="dynamicDisabled"
            displayFormat="MM DD YY"
            disabled
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>YYYY</Label>
          <DatetimePicker
            pickerOptions={{
              buttons: [
                {
                  text: 'Save',
                  handler: () => console.log('Clicked Save!'),
                },
                {
                  text: 'Log',
                  handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return false;
                  },
                },
              ],
            }}
            placeholder="Custom Options"
            displayFormat="YYYY"
            min="1981"
            max="2002"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label position="stacked">MMMM YY</Label>
          <DatetimePicker
            displayFormat="MMMM YY"
            min="1989-06-04"
            max="2004-08-23"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label position="floating">MM/DD/YYYY</Label>
          <DatetimePicker
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label position="floating">MM/DD/YYYY</Label>
          <DatetimePicker
            displayFormat="MM/DD/YYYY"
            min="1994-03-14"
            max="2012-12-09"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>DDD. MMM DD, YY (custom locale)</Label>
          <DatetimePicker
            min="1990-02"
            max="2000"
            dayShortNames={customDayShortNames}
            displayFormat="DDD. MMM DD, YY"
            monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>D MMM YYYY H:mm</Label>
          <DatetimePicker
            displayFormat="D MMM YYYY H:mm"
            min="1997"
            max="2010"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>DDDD MMM D, YYYY</Label>
          <DatetimePicker
            displayFormat="DDDD MMM D, YYYY"
            min="2005"
            max="2016"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>HH:mm</Label>
          <DatetimePicker
            displayFormat="HH:mm"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>h:mm a</Label>
          <DatetimePicker
            displayFormat="h:mm a"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>hh:mm A (15 min steps)</Label>
          <DatetimePicker
            displayFormat="h:mm A"
            minuteValues="0,15,30,45"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>Leap years, summer months</Label>
          <DatetimePicker
            displayFormat="MM/YYYY"
            pickerFormat="MMMM YYYY"
            monthValues="6,7,8"
            yearValues={customYearValues}
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>

        <Item>
          <Label>Specific days/months/years</Label>
          <DatetimePicker
            monthValues="6,7,8"
            yearValues="2014,2015"
            dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"
            displayFormat="DD/MMM/YYYY"
            value={selectedDate}
            onChange={(e: any) => setSelectedDate(e.detail.value!)}
          ></DatetimePicker>
        </Item>
      </Content>
      <Footer>
        <Toolbar>Selected Date: {selectedDate ?? '(none)'}</Toolbar>
      </Footer>
    </Page>
  );
};
