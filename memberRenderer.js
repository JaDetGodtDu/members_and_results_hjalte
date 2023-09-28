const MemberRenderer = {
  render(member) {
    const formattedBirthday = member.birthday.toLocaleDateString(
      undefined,{
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    const html = /*html*/ `
    <tr>
      <td>${member.getFullName()}</td>
      <td>${member.active ? "Active" : "Not Active"}</td>
      <td>${formattedBirthday}</td>
      <td>${member.getAge()}</td>
      <td>${member.getJuniorSeniorStatus()}</td>
      <td>${member.email}</td>
    </tr>`;
    return html
  },
};
export { MemberRenderer }