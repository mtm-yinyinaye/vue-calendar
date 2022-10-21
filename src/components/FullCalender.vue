<template>
  <div class="full-calender">
    <h2>Full Calender</h2>
    <FullCalendar class="demo-app-calendar" :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <p>{{ arg.event.title }}</p>
        <!-- <b>{{ arg.timeText }}</b> -->
        <!-- <i>{{ arg.event.title }}</i> -->
      </template>
    </FullCalendar>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        headerToolbar: {
          left: "title",
          right: "prev,next",
          // left: "prev,next today",
          // center: "title",
          // right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        // editable: true,
        // selectable: true,
        // selectMirror: true,
        // select: this.handleDateSelect,
        // weekends: true,
        events: [
          { title: "event1 event1", date: "2022-10-01" },
          { title: "event2 event1", date: "2022-10-23" },
        ],
      },
    };
  },
  methods: {
    // handleWeekendsToggle() {
    //   this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    // },
  }
};
</script>

<style>
.full-calender {
  width: 600px;
  margin: 0 auto;
}
p {
  word-break: break-word;
  white-space: normal;
  text-overflow: ellipsis;
  margin: 0;
}
/* .fc .fc-scroller-liquid-absolute {
  overflow: hidden !important;
} */
.fc .fc-daygrid-day-frame {
  min-height: 5em;
  max-height: 5em;
}
.fc .fc-day-other .fc-daygrid-day-top {
  opacity: 0;
}
a {
  text-decoration: none;
}
</style>