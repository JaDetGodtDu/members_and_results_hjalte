import * as listRenderer from "./listRenderer.js";

const members = [];

const membersContainer = document.getElementById("members");

async function membersMain(itemRenderer) {
  await buildMembersList();
  const memberList = listRenderer.construct(members, membersContainer, itemRenderer);
  memberList.render();
}

async function fetchMembers() {
  const resp = await fetch("./data/members.json");
  const data = await resp.json();
  return data;
}

async function buildMembersList() {
  const members = await fetchMembers();

  for (const member of members) {
    const memberObj = constructMember(member);
    members.push(memberObj);
  }
}

function constructMember(memberdata) {
  const MemberObject = {
    name: memberdata.firstName,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    birthday: new Date(memberdata.dateOfBirth),
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    id: memberdata.id,
    lastName: memberdata.lastName,
    fullName: "",
    getAge() {
      const today = new Date();
      const age = today.getFullYear() - this.birthday.getFullYear();
      return age;
    },
    isJunior() {
      const age = this.getAge();
      return age < 18;
    },
    isSenior() {
      const age = this.getAge();
      return age >= 18;
    },
    getJuniorSeniorStatus() {
      const age = this.getAge();
      if (age < 18) {
        return "junior";
      } else if (age >= 18) {
        return "senior";
      }
    },
    getFullName() {
      const fullName = `${this.name} ${this.lastName}`;
      return fullName;
    },
  };

  Object.defineProperties(MemberObject, {
    id: {
      value: memberdata.id,
      writable: false,
    },
    name: {
      enumerable: false,
    },
    image: {
      enumerable: false,
    },
  });
  return MemberObject;
}

export { membersMain };
