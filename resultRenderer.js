const ResultRenderer = {
    render(result){
        /* const memberName =  result.getMemberName();
        console.log(memberName); */
    const html = /*html*/ `
    <tr>
      <td>${result.dato.toLocaleDateString("da")}</td>
      <td>${result.getMemberName()}</td>
      <td>${result.translateDisciplin()}</td>
      <td>${result.resultType()}</td>
      <td>${result.time}</td>
    </tr>`;

    return html
    }
}

export {ResultRenderer}