import React from "react";
import { Table } from "@trussworks/react-uswds";
import { Immunization } from "fhir/r4";
import { formatCodeableConcept, formatDate } from "../../format-service";

/**
 * The props for the ImmunizationTable component.
 */
export interface ImmunizationTableProps {
  immunizations: Immunization[];
}

/**
 * Displays a table of data from array of Immunization resources.
 * @param props - Immunization table props.
 * @param props.immunizations - The array of Immunization resources.
 * @returns - The ImmunizationTable component.
 */
const ImmunizationTable: React.FC<ImmunizationTableProps> = ({
  immunizations,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Immunization</th>
          <th>Provider</th>
        </tr>
      </thead>
      <tbody>
        {immunizations.map((immunization) => (
          <tr key={immunization.id}>
            <td>{immunization.occurrenceDateTime}</td>
            <td>
              {immunization.vaccineCode.coding[0].display}
            </td>
            <td>{immunization.performer[0].actor?.display}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ImmunizationTable;
