import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface PropsSearchInput {
  handleSubmit: (ref: string) => void;
}

const SearchInput = ({ handleSubmit }: PropsSearchInput) => {
  const ref = useRef<HTMLInputElement>(null);
  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) handleSubmit(ref.current.value);
  };

  return (
    <form onChange={(event) => onSubmitForm(event)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={"20px"}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
