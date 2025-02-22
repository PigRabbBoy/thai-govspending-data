import type { Caller } from "../caller";

export class SaveToJson {
  private caller: Caller;
  private perFileLimit = 10000;
  constructor(caller: Caller) {
    this.caller = caller;
  }

  private async save(filePath: string, data: any) {
    console.time("save file : " + filePath);
    await Bun.write("./data" + filePath + '.json', JSON.stringify(data));
    console.timeEnd("save file : " + filePath)
  }

  async saveDepartment() {
    console.time('save department')
    const limit = 100;

    let count = 0;
    let offset = 0;
    let departments = [];
    let fileCount = 1;
    while (true) {
      console.time("offset : " + offset);
      const response = await this.caller.callEGPDepartment({
        offset,
        limit,
      });

      if (!response?.result?.length) {
        await this.save(
          `/departments/department-${fileCount}`,
          departments
        );
        console.timeEnd("offset : " + offset);
        break;
      }

      for (const department of response.result) {
        departments.push(department);
        count++;

        if (count >= this.perFileLimit) {
          await this.save(
            `/departments/department-${fileCount}`,
            departments
          );

          departments = [];
          count = 0;
          fileCount++;
        }
      }

      console.timeEnd("offset : " + offset);
      offset += limit;
    }

    console.timeEnd('save department')

  }
}
