import * as MemberRenderer from "./MemberRenderer.js"

function construct(list, container, itemRenderer) {
  const ListRenderer = {
    render() {
      /* const table = document.querySelector("#members tbody"); */
      this.container.innerHTML = "";
      for (const member of list) {
        // const formattedBirthday = member.birthday.toLocaleDateString(
        //   undefined,
        //   {
        //     weekday: "short",
        //     year: "numeric",
        //     month: "numeric",
        //     day: "numeric",
        //   }
        // );

    //     const html = /*html*/ `
    // <tr>
    //   <td>${member.getFulleName()}</td>
    //   <td>${member.active ? "Active" : "Not Active"}</td>
    //   <td>${formattedBirthday}</td>
    //   <td>${member.getAge()}</td>
    //   <td>${member.getJuniorSeniorStatus()}</td>
    //   <td>${member.email}</td>
    // </tr>`;
        const html = MemberRenderer.render()
        this.container.insertAdjacentHTML("beforeend", html);
      }
    },
  };
  return ListRenderer;
}

export { construct };
