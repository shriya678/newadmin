import { Select, SelectItem } from "@tremor/react";
import { CalculatorIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { SelectBoxContext } from "../pages/Dashboard";

export function SelectComponent({ roleDB, BarDB, serviceTypeDB }) {

  
  const { setSelectStatus, setSelectBar, setSelectService } =
    useContext(SelectBoxContext);

  // const roleDB = ['driver','cleaner','mechanic'];

  // const [value, setValue] = useState("");

  return (
    <div className="max-w-sm space-y-6 dark:bg-tremor-background">
      <Select
        className="dark:bg-tremor-background"
        // value={roleDB ? selectRole : selectBar}
        onValueChange={roleDB ? setSelectStatus : BarDB ? setSelectBar: serviceTypeDB ? setSelectService:""}
      >
        {roleDB
          ? roleDB.map((role, index) => {
              return (
                <SelectItem key={index} value={role} icon={CalculatorIcon}>
                  {role}
                </SelectItem>
              );
            })
          :
          BarDB ? BarDB?.map((bar, index) => {
              return (
                <SelectItem key={index} value={bar} icon={CalculatorIcon}>
                  {bar}
                </SelectItem>
              );
            })
            :
            serviceTypeDB ? serviceTypeDB.map((service, index) => {
              return (
                <SelectItem key={index} value={service} icon={CalculatorIcon}>
                  {service}
                </SelectItem>
              );
            })
            :
            ""
            }

        {/* <SelectItem value="1" icon={CalculatorIcon}>
          Yearly
        </SelectItem>
        <SelectItem value="2" icon={CalculatorIcon}>
          Monthly
        </SelectItem>
        <SelectItem value="3" icon={CalculatorIcon}>
          Weakly
        </SelectItem> */}
      </Select>
    </div>
  );
}
