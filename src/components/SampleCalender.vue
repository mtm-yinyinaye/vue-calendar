<template>
  <h2>My Calendar</h2>
  <div class="calender-content">
    <calendar-view
      :items="items"
      :show-date="showDate"
      :enable-drag-drop="false"
      :disable-past="false"
      :disable-future="false"
      class="theme-default holiday-us-traditional holiday-us-official"
    >
      <template #header="{ headerProps }">
        <div class="calender-header">
          <div class="uppercase font-bold">
            <slot name="label">{{ headerProps.periodLabel }}</slot>
          </div>
          <div class="button">
            <button
              class="btn"
              @click.prevent="setShowDate(headerProps.previousPeriod)"
            >
              &lt;&lt;
            </button>
            <button
              class="btn"
              @click.prevent="setShowDate(headerProps.nextPeriod)"
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </template>
    </calendar-view>
  </div>
</template>

<script>
import { CalendarView } from "vue-simple-calendar";
export default {
  components: { CalendarView },
  data: function () {
    return {
      showDate: new Date("2022-07"),
      items: [
        {
          id: 1,
          startDate: new Date("2022-07-03 03:00:00"),
          endDate: new Date("2022-07-03 04:00:00"),
          title: "XXXXXXXXXXXXXX",
          tooltip: "Hello",
        },
        {
          id: 2,
          startDate: new Date("2022-10-23"),
          title: "XXXXXXXX",
        },
        {
          id: 3,
          startDate: new Date("2022-07-04 03:00:00"),
          endDate: new Date("2022-07-04 04:00:00"),
          title: "XXXXXXXX",
        },
        {
          id: 4,
          startDate: new Date("2022-07-17 03:00:00"),
          title: "XXXXXXXX",
        },
        {
          id: 5,
          startDate: new Date("2022-07-18 03:00:00"),
          title: "XXXXXXXX",
        },
        {
          id: 6,
          startDate: new Date("2022-07-24 03:00:00"),
          title: "XXXXXXXXXXXXXX",
        },
        {
          id: 7,
          startDate: new Date("2022-07-25 03:00:00"),
          title: "XXXXXXXXXXXXX",
        },
        {
          id: 8,
          startDate: new Date("2022-07-28 03:00:00"),
          title: "XXXXXXXXXXXX",
        },
      ],
    };
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  },
};
</script>

<style>
.cv-day {
  justify-content: center;
}
.calender-content {
  width: 600px;
  margin: 0 auto;
}
.calender-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>