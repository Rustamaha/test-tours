<template lang="pug">
  div.datepicker(:class="{ 'datepicker_open': isOpened }")
    button.datepicker__button(@click='open')
      | Даты
      span.datepicker__arrow
    div(v-if='isOpened')
      div.datepicker__header
        button.datepicker__btn.datepicker__btn_prev(@click='prevMonth')
          span.datepicker__arrow.datepicker__arrow_left
        div.datepicker__today-month {{ todayMonthYear }}
        button.datepicker__btn.datepicker__btn_next(@click='nextMonth')
          span.datepicker__arrow.datepicker__arrow_right
      div.datepicker__body
        div.datepicker__table
          div.datepicker__week
            div.datepicker__week-day(v-for='weekDay in weekDayNames')
              |{{ weekDay }}
          div.datepicker__trow(v-if='week'
            v-for='week in month')
            div.datepicker__cell(@click='pickDates(date)'
              v-for='date in week'
              :class='cellStatus(date)')
              div.datepicker__date(:class='dateStatus(date)')
                |{{ date.date }}
        div.datepicker__footer
          |Выберите дату не позднее которой хотите вернуться
</template>

<script>
const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const todayDate = new Date();
const todayYear = todayDate.getFullYear();
const todayMonth = todayDate.getMonth();
const daysInMonth = (month, year) => (32 - new Date(year, month, 32).getDate());
const getDay = (year, month, day) => (new Date(year, month, day)).getDay();

export default {
  name: 'DatePicker',
  components: {

  },
  data() {
    return {
      isOpened: false,
      todayMonthYear: '',
      todayDate: null,
      month: [],
      todayMonth: null,
      todayYear: null,
      range: [],
      startDate: null,
      endDate: null,
      clickCount: 0,
      selectedRange: '',
    };
  },
  created() {
    const date = new Date();
    this.todayDate = date;
    this.todayMonth = date.getMonth();
    this.todayYear = date.getFullYear();
    const todayMonthStr = new Date(todayYear, todayMonth).toLocaleDateString('ru-RU', { month: 'long' });
    this.todayMonthYear = `${todayMonthStr} ${todayYear}`;
    this.makeTable(this.todayYear, this.todayMonth);
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpened = false;
      }
    },
    makeTable(year, month) {
      let date = 1;
      let dateNextM = 1;
      let ind = 0;
      this.month = [];
      for (let i = 0; i < 5; i += 1) {
        let dates = [];
        for (let j = 1; j < 8; j += 1) {
          const firstDay = getDay(year, month, 1) === 0 ? 7 : getDay(year, month, 1);
          const day = new Date(year, month, date).getDay();
          const weekDay = day === 0 ? 7 : day;
          if (i === 0 && j < firstDay) {
            const daysInPrevM = daysInMonth(month - 1, year);
            const prevDate = daysInPrevM + 1 - (firstDay - j);
            const prevMonth = month - 1 < 0 ? 11 : month - 1;
            dates = [...dates, { date: prevDate, month: prevMonth, ind }];
          }
          if (date > daysInMonth(month, year)) {
            const nextMonth = month + 1 > 11 ? 0 : month + 1;
            dates = [...dates, { date: dateNextM, month: nextMonth, ind }];
            dateNextM += 1;
          }
          if (date === new Date(year, month, date).getDate() && j === weekDay) {
            dates = [...dates, { date, month, ind }];
            date += 1;
          }
          ind += 1;
        }
        this.month.push(dates);
      }
    },
    prevMonth() {
      this.todayMonth -= 1;
      if (this.todayMonth < 0) {
        this.todayMonth = 11;
        this.todayYear -= 1;
      }
      const todayMonthStr = new Date(this.todayYear, this.todayMonth).toLocaleDateString('ru-RU', { month: 'long' });
      this.todayMonthYear = `${todayMonthStr} ${this.todayYear}`;
      this.makeTable(this.todayYear, this.todayMonth);
    },
    nextMonth() {
      this.todayMonth += 1;
      if (this.todayMonth > 11) {
        this.todayMonth = 0;
        this.todayYear += 1;
      }
      const todayMonthStr = new Date(this.todayYear, this.todayMonth).toLocaleDateString('ru-RU', { month: 'long' });
      this.todayMonthYear = `${todayMonthStr} ${this.todayYear}`;
      this.makeTable(this.todayYear, this.todayMonth);
    },
    pickDates(day) {
      if (this.clickCount === 2) {
        this.clickCount = 0;
        this.range = [];
        this.startDate = null;
        this.endDate = null;
      }
      this.selectedRange = this.todayMonthYear;
      if (!this.startDate) {
        this.startDate = day;
      } else {
        if (this.startDate.ind > day.ind) {
          this.endDate = this.startDate;
          this.startDate = day;
          this.clickCount += 1;
          this.range.push(day);
          return;
        }
        this.endDate = day;
      }
      this.clickCount += 1;
      this.range.push(day);
    },
    dateStatus({ date, month, ind }) {
      const classList = [];
      if (this.selectedRange !== this.todayMonthYear) {
        return classList;
      }
      const thisMonth = this.month.flat();
      const mondaysInd = [0, 7, 14, 21, 28];
      const sundaysInd = [6, 13, 20, 27, 34];
      if (this.endDate && date === this.endDate.date && month === this.endDate.month) {
        classList.push('datepicker__date_end-date');
      }
      if (this.startDate && date === this.startDate.date && month === this.startDate.month) {
        classList.push('datepicker__date_start-date');
      }
      if (this.startDate && this.endDate) {
        if (this.startDate && date === this.startDate.date && month === this.startDate.month) {
          classList.push('datepicker__date_start-date');
        }
        const interval = thisMonth.slice(this.startDate.ind + 1, this.endDate.ind);
        interval.forEach((day) => {
          if (date === day.date && month === day.month && mondaysInd.includes(ind)
            && this.startDate.month <= month && month <= this.endDate.month) {
            classList.push('datepicker__date_inrange-left-side');
          }
          if (date === day.date && month === day.month && sundaysInd.includes(ind)
            && this.startDate.month <= month && month <= this.endDate.month) {
            classList.push('datepicker__date_inrange-right-side');
          }
          if (date === day.date && month === day.month
            && this.startDate.month <= month && month <= this.endDate.month) {
            classList.push('datepicker__date_inrange');
          }
        });
      }
      return classList;
    },
    cellStatus({ date, month }) {
      const classList = [];
      if (this.selectedRange !== this.todayMonthYear) {
        return classList;
      }

      if (this.startDate && this.endDate) {
        if (this.startDate.date === this.endDate.date) {
          return classList;
        }
        if (date === this.startDate.date && month === this.startDate.month) {
          classList.push('datepicker__cell_start-cell');
        }
        if (date === this.endDate.date && month === this.endDate.month) {
          classList.push('datepicker__cell_end-cell');
        }
      }
      return classList;
    },
  },
  computed: {
    weekDayNames() {
      return weekDayNames;
    },
  },
};
</script>
<style scoped lang="scss">
.datepicker {
  width: 42.86%;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.16em;
  color: $black-color;
  height: 49px;
  background: $white-color;
  border-radius: 29.5px;

  &_open {
    width: 283px;
    height: 363px;
    position: absolute;
    margin-bottom: -363px;
    z-index: 1;
    transition: 0.5s;
  }

  &__button {
    border-style: none;
    width: 100%;
    height: 49px;
    background: $white-color;
    border-radius: 29.5px;
    padding: 0 29px 0 30px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
  }

  &__btn {
    border-style: none;
    width: 32.16%;
    background: $white-color;
    padding: 0;

    &_prev {
      padding-left: 28px;
    }

    &_next {
      padding-right: 31px;
    }
  }

  &__header {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    padding-bottom: 1.58em;
  }

  &__body {
    width: 246px;
    padding: 0 20px 0 17px;
  }

  &__today-month {
    width: 35.68%;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.21em;
    color: $black-color;
    font-weight: 700;
  }

  &__arrow {
    width: 0.31em;
    height: 0.31em;
    position: relative;

    &:before {
      border: solid $black-color;
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      position: absolute;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &_right {
      float: right;

      &:before {
        border: solid $black-color;
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        position: absolute;
        border-width: 0 1px 1px 0;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    }

    &_left {
      float: left;

      &:before {
        border: solid $black-color;
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        position: absolute;
        border-width: 0 1px 1px 0;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }
    }
  }

  &__week,
  &__trow {
    display: flex;
    display: -webkit-flex;
    text-align: center;
  }

  &__week-day {
    font-size: 0.75rem;
    line-height: 1.16em;
    width: 14.27%;
  }

  &__cell {
    font-size: 0.75rem;
    line-height: 2.91em;
    color: $black-color;
    cursor: pointer;
    padding: 0;
    width: 14.27%;
    height: 35px;
    margin: 0;

    &_end-cell {
      background: $lightGray;
      border-radius: 0 100% 100% 0;
      width: 35px;
      height: 35px;
    }

    &_start-cell {
      background: $lightGray;
      border-radius: 100% 0 0 100%;
      width: 35px;
      height: 35px;
    }
  }

  &__date {
    font-size: 0.75rem;
    cursor: pointer;
    height: 35px;

    &_start-date {
      background: $yellow-color;
      border-radius: 100%;
      width: 35px;
      height: 35px;
    }

    &_end-date {
      background: $yellow-color;
      border-radius: 100%;
      width: 35px;
      height: 35px;
    }

    &_current {
      border: 1px solid $black-color;
    }

    &_inrange {
      background: $lightGray;
    }

    &_inrange-left-side {
      background: $lightGray;
      border-radius: 100% 0 0 100%;
      width: 35px;
      height: 35px;
    }

    &_inrange-right-side {
      background: $lightGray;
      border-radius: 0 100% 100% 0;
      width: 35px;
      height: 35px;
    }
  }

  &__footer {
    padding-top: 1.75em;
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  .datepicker {
    width: 100%;
    max-width: 280px;
  }
}

@media only screen and (max-width: 500px) {
  .datepicker {
    height: 40px;

    &_open {
      width: 283px;
      height: 363px;
      position: absolute;
      margin-bottom: -363px;
      z-index: 1;
      transition: 0.5s;
    }

    &__button {
      height: 40px;
    }
  }
}
</style>
