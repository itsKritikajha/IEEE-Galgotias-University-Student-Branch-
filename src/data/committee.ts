export type CommitteeMember = {
  name: string;
  role: string;
  institution: string;
  category: "Chief Patron" | "Patron" | "General Chair" | "Organizing Chair" | "Technical Chair" | "Advisory Board";
};

export const CONFERENCE_COMMITTEE: CommitteeMember[] = [
  { name: "Shri Suneel Galgotia", role: "Chief Patron", institution: "Hon'ble Chancellor, Galgotias University", category: "Chief Patron" },
  { name: "Dr. Dhruv Galgotia", role: "Patron", institution: "Chief Executive Officer (CEO), Galgotias University", category: "Patron" },
  { name: "Ms. Aradhana Galgotia", role: "Patron", institution: "Director Operations, Galgotias University", category: "Patron" },
  { name: "Prof. Dr. K.M. Babu", role: "Patron", institution: "Vice-Chancellor, Galgotias University", category: "Patron" },
  { name: "Prof. Dr. Avadhesh Kumar", role: "General Chair", institution: "Pro-VC, Galgotias University & Vice Chair IEEE UP Section", category: "General Chair" },
  { name: "Prof. Dr. Yogesh S. Chauhan", role: "General Chair", institution: "Professor, IIT Kanpur & Chair IEEE UP Section", category: "General Chair" },
  { name: "Aanjey M. Tripathi", role: "Organizing Chair", institution: "Professor & Head, Galgotias University", category: "Organizing Chair" },
  { name: "Kuldeep S. Kaswan", role: "Organizing Chair", institution: "Professor, Computer Science, Galgotias University", category: "Organizing Chair" },
  { name: "Shraddha Sagar", role: "Technical Chair", institution: "Associate Professor, Galgotias University", category: "Technical Chair" },
  { name: "Sonia Setia", role: "Technical Chair", institution: "Associate Professor, Galgotias University", category: "Technical Chair" },
  { name: "Trapti Shrivastava", role: "Advisory Board", institution: "Assistant Professor, Galgotias University", category: "Advisory Board" },
  { name: "Arpesh Singh", role: "Advisory Board", institution: "Assistant Professor, Galgotias University", category: "Advisory Board" },
];
