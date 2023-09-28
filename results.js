import * as listRenderer from "./listRenderer.js";

const results = [];

const resultsContainer = document.getElementById("results")

async function resultsMain(itemRenderer) {
  await buildResultsList();
  const resultList = listRenderer.construct(results, resultsContainer, itemRenderer)
  resultList.render()
}

async function fetchResults() {
  const resp = await fetch("data/results.json");

  const data = await resp.json();
  return data;
}

async function fetchMembers() {
  const resp = await fetch("data/members.json");
  const data = await resp.json();

  return data
}

async function buildResultsList() {
  const resultsList = await fetchResults();
  const memberList = await fetchMembers()

  for (const result of resultsList) {
    const memberObj = memberList.find((member) => member.id === result.memberId)
    if (memberObj != undefined) {
      const resultsObj = constructResult(result, memberObj);
      results.push(resultsObj);
    }
  }
}

function constructResult(resultdata, memberData) {
  const ResultObject = {
    dato: new Date(resultdata.date),
    id: resultdata.id,
    disciplin: resultdata.discipline,
    type: resultdata.resultType,
    time: resultdata.time,
    memberId: resultdata.memberId,
    memberFirstName: memberData.firstName,
    memberLastName: memberData.lastName,
    isCompetition() {
      return this.type === "competition";
    },
    isTraining() {
      return this.type === "training";
    },
    translateDisciplin() {
      if (this.disciplin === "backstroke") {
        return "rygsvømning";
      } else if (this.disciplin === "freestyle") {
        return "fri";
      } else if (this.disciplin === "butterfly") {
        return "butterfly";
      } else if (this.disciplin === "breaststroke") {
        return "brystsvømning";
      }
    },
    fromTimeToMillis() {
      const [minutesPart, secondsPart] = this.time.split(":");
      const [seconds, milliseconds] = secondsPart.split(".");
      const totalMilliseconds = parseInt(minutesPart, 10) * 60 * 1000 + parseInt(seconds, 10) * 1000 + parseInt(milliseconds, 10);

      return totalMilliseconds;
    },
    resultType() {
      if (this.isCompetition()) {
        return "stævne";
      } else if (this.isTraining()) {
        return "træning";
      }
    },
    memberFullName() {
      let memberFullName = `${this.memberFirstName} ${this.memberLastName}`
      return memberFullName
    }
  };
  Object.defineProperties(ResultObject, {
    id: {
      value: resultdata.id,
      writable: false,
    },
    isCompetition: {
      enumerable: false,
    },
    isTraining: {
      enumerable: false,
    },
    translateDisciplin: {
      enumerable: false,
    },
    fromTimeToMillis: {
      enumerable: false,
    },
    resultType: {
      enumerable: false,
    },
  });

  return ResultObject;
}

export { resultsMain };
