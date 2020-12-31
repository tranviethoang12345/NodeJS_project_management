import chai from "chai";
import sinon from "sinon";
import { Employees } from "../src/components/employee/employee.model.js";
import {
  createOne,
  getOneById,
  getListByCondition,
  getOneByCondition,
  updateOneById,
  deleteOneById,
} from "../src/components/employee/employee.service.js";

const { expect } = chai;

describe("EMPLOYEE TESTING", () => {
  let countEmployee = sinon.stub();
  let findEmployeeList = sinon.stub();

  beforeEach(() => {
    countEmployee = sinon.stub(Employees, "countDocuments");
    findEmployeeList = sinon.stub(Employees, "findList");
  });

  afterEach(() => {
    findEmployeeList.restore();
    countEmployee.restore();
  });

  it("Should return empty array", async () => {
    countEmployee.resolves(1);
    findEmployeeList.returns({
      limit: () => ({
        skip: () => ({
          sort: () => [],
        }),
      }),
    });
    const actual = await getListByCondition({
      filter: "asdasdsa",
      filterOn: "aaaaa",
    });
    expect(actual).to.deep.equal({
      total: 1,
      data: [],
    });
  });
});
