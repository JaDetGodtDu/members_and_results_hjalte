const ResultRenderer = {
    render(result){
    const html = /*html*/ `
    <tr>
      <td>${result.dato.toLocaleDateString("da")}</td>
      <td>${result.memberFullName()}</td>
      <td>${result.translateDisciplin()}</td>
      <td>${result.resultType()}</td>
      <td>${result.time}</td>
    </tr>`;

    return html
    }
}

export {ResultRenderer}