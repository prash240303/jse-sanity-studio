import { defineType } from "sanity";

export default defineType({
  name: "stats",
  title: "Stats",
  type: "document",
  fields: [
    {
      name: "volunteerCount",
      title: "Volunteers",
      type: "string",
    },
    {
      name: "childrenBenifitedCount",
      title: "Children Benifited",
      type: "string",
    },
    {
      name: "donatorsCount",
      title: "Donators",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
