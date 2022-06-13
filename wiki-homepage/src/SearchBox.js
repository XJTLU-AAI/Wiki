import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBox() {

    const [searchBoxValue, setSearchBoxValue] = useState("");

    function onSearchBoxInputChanged(newValue) {
        // console.log(newValue);
        setSearchBoxValue(newValue.target.value);
    }

    function onSearchButtonClicked(event) {
        console.log("search: " + searchBoxValue);
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20
            }}>
            <div>
                <InputGroup style={{ width: 400, }}>
                    <FormControl placeholder="搜索框" value={searchBoxValue} onChange={onSearchBoxInputChanged} />
                </InputGroup>
            </div>
            <Button onClick={onSearchButtonClicked} style={{ marginLeft: 5}}>搜索</Button>
        </div>

    );
}

export { SearchBox }