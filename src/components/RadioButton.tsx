import styled from "styled-components";

const RadioLabel = styled.label`
  display: block;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #E4ECF4;
  }
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

interface Props {
    label: string;
    value: string;
    selectedUserType: string;
    name: string;
    onChange: () => void;
}

const RadioButton = ({label, value, selectedUserType, name, onChange}: Props) => (
    <RadioLabel htmlFor={value}>
        <RadioInput
            id={value}
            type="radio"
            value={value}
            name={name}
            checked={selectedUserType === value}
            onChange={onChange}
        />
        {label}
    </RadioLabel>
)

export default RadioButton