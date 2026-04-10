//Write your code here
/*
Create a variable named attendee and assign it an object with the following properties:

attendeeId (a string) with the value "T001"
name (a string) with the value "Alice Smith"
event (a string) with the value "JavaScript Conference"
ticketType (a string) with the value "VIP"
ticketPrice (a number) with the value 150.00
*/

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.0,
};

const logAttendeeName = (attendee) => {
  console.log(attendee.name);
};

const logTicketPrice = (attendee) => {
  console.log(attendee.ticketPrice);
};

const updateTicketType = (attendee, newType) => {
  attendee.ticketType = newType;
};

const updateTicketPrice = (attendee, newPrice) => {
  attendee.ticketPrice = newPrice;
};

const removeEventProperty = (attendee) => {
  delete attendee.event;
};

const addCheckedInProperty = (attendee) => {
  attendee.checkedIn = true;
};
//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== "undefined" && { attendee }),
  ...(typeof logAttendeeName !== "undefined" && { logAttendeeName }),
  ...(typeof logTicketPrice !== "undefined" && { logTicketPrice }),
  ...(typeof updateTicketType !== "undefined" && { updateTicketType }),
  ...(typeof updateTicketPrice !== "undefined" && { updateTicketPrice }),
  ...(typeof removeEventProperty !== "undefined" && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== "undefined" && { addCheckedInProperty }),
};
