import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { StyledSearchForm } from "./searchBarStyles";
import Input from "../Input";
import Button from "../Button";

interface SearchBarProps {
    variant?: "Fa" | "Ai" | "Bi";
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ variant = "Fa", onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const SearchIcon = variant === "Ai" ? AiOutlineSearch : variant === "Bi" ? BiSearch : FaSearch;

    return (
        <StyledSearchForm
            onSubmit={handleSearch}
        >
            <Input 
                variant="search-bar-input"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit">
                <SearchIcon />
            </button>
        </StyledSearchForm>
    );
};

export default SearchBar;