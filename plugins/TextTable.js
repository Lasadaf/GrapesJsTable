function TextTablePlugin(editor){
    editor.BlockManager.add('my-first-block', {
      label: 'Таблица',
      content: `<table width="80%" style="border-collapse: collapse; border:1px solid black; margin:auto; max-width: 100%;">
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      <tr>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      <td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="
      this.style.height = '0px';
      this.style.height = this.scrollHeight + 5 + 'px';
      "></textarea></td>
      </tr>
      </table>`
    });
    //<td style="border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;"><textarea type="text" style="height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center;" oninput="

    /*

    const script = function () {
      var i = 0;
      var j = 0;
      var tbl = document.querySelector('.tbl');
      tbl.style = "border-collapse: collapse; border:1px solid black; margin:auto; max-width: 100%; width: 80%";
      for (i ; i < 8 ; i++) {
        j = 0;
        let row = document.createElement("tr");
        for (j ; j < 4 ; j++) {
          let cell = document.createElement("td");
          cell.style = "border-collapse: collapse; border:1px solid black; margin:auto; min-width: 25%; height:100%;";
          let txtarea = document.createElement("textarea");
          txtarea.style = "height:100%; width:100%; min-height:30px; border: none; resize: none; text-align: center; padding-top: 10px";
          txtarea.setAttribute("oninput", `
              this.style.height = '0px';
              this.style.height = this.scrollHeight + 5 + 'px';`);
          cell.append(txtarea);
          row.append(cell);
        }
        tbl.append(row);
      }
    }

    editor.Components.addType('script-table', {
      model: {
        defaults: {
          script,
          content: `<table class="tbl"></table>`,
        }
      }
    });

    editor.Blocks.add('test-block', {
      label: 'Таблица командами',
      attributes: { class: 'fa fa-text' },
      content: { type: 'script-table' },
    });

    */

}
