const MemberRenderer = {
  render(member) {
    const member = this.item
    const html = /*html*/ `
    <tr>
      <td>${member.getFulleName()}</td>
      <td>${member.active ? "Active" : "Not Active"}</td>
      <td>${formattedBirthday}</td>
      <td>${member.getAge()}</td>
      <td>${member.getJuniorSeniorStatus()}</td>
      <td>${member.email}</td>
    </tr>`;
    return html
  },
};
export default MemberRenderer