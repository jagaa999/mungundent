import React from "react";
import { isEmpty } from "lodash";

export const callData = async (
  doc,
  sheetName,
  setMyData,
  setMyHeader = undefined
) => {
  if (isEmpty(doc)) return null;
  const sheet = doc.sheetsByTitle[sheetName];
  const columnCount = sheet.columnCount || 0;
  const lastColumnLetter = sheet.lastColumnLetter;
  const rowCount = sheet.rowCount;
  await sheet.loadCells(`A1:${lastColumnLetter}${rowCount}`);

  let headerRow = {};
  for (j = 0; j < columnCount; j++) {
    const myTempCell = sheet.getCell(0, j);
    headerRow[j] = myTempCell.value;
  }

  var i, j;
  let tempData = [];
  for (i = 1; i < rowCount; i++) {
    let tempItem = {};
    for (j = 0; j < columnCount; j++) {
      const myTempCell = sheet.getCell(i, j);
      tempItem[headerRow[j]] = myTempCell.value;
      tempItem[headerRow[j]] = {
        value: myTempCell.value,
        note: myTempCell.note,
      };
    }
    tempData.push(tempItem);
  }

  if (setMyData !== undefined) setMyData([...tempData]);
  if (setMyHeader !== undefined) setMyHeader({ ...headerRow });
};
