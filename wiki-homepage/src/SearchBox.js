/*
 *  This file contains the source code of ZoneWeb App
 *  Copyright (c) 2020 Zone Team.
 *  Copyright (c) contributors
 *
 *  Authors: Hao Su <hao.su19@student.xjtlu.edu.cn>
 */
import React from 'react';
import "./SearchBox.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Dropdown, DropdownButton, Tabs, Tab } from 'react-bootstrap'

const arr_engineNormal = ["bing", "baidu", "google"];
const arr_engineNormalName = ["必应", "百度", "谷歌"];
const arr_engineAcademic = ["discovery", "google-scholar", "bing-academic", "baidu-xueshu"];
const arr_engineAcademicName = ["校图书馆", "谷歌学术", "必应学术", "百度学术"];

/* 
 * TODO: remove warnings suppress // eslint-disable-next-line
 *          and re-write search box history list
 */
class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        var searchHistoryList;
        if (localStorage.getItem("searchHistoryList") !== undefined && localStorage.getItem("searchHistoryList") !== null) {
            searchHistoryList = JSON.parse(localStorage.getItem("searchHistoryList"));
        }
        var engineNormalPrefered = localStorage.getItem('engineNormalPrefered');
        if (engineNormalPrefered !== null) {
            this.state = {
                mode: "normal",
                engine: engineNormalPrefered,
                engineName: arr_engineNormalName[arr_engineNormal.indexOf(engineNormalPrefered)],
                historyList: searchHistoryList,
                isHistoryShow: false //判断是否显示历史搜索框
            };
        } else {
            this.state = {
                mode: "normal",
                engine: arr_engineNormal[0],
                engineName: arr_engineNormalName[0],
                historyList: searchHistoryList,
                isHistoryShow: false
            };
        }

        this.handleSearchModeChanged = this.handleSearchModeChanged.bind(this);
        this.handleDropSearchEngineChanged = this.handleDropSearchEngineChanged.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchInputBlur = this.handleSearchInputBlur.bind(this);
        this.handleSearchInputFocus = this.handleSearchInputFocus.bind(this);
        this.saveHistoryList = this.saveHistoryList.bind(this);
    }

    /*
        展示历史记录
     */
    handleSearchInputFocus() {
        this.setState({
            isHistoryShow: true,
            inputFocus: true
        });
    }

    /*
        隐藏历史记录
     */
    handleSearchInputBlur() {
        this.setState({ inputFocus: false });
        if (this.state.mouseOnList === false) {
            this.setState({
                isHistoryShow: false,
            })
        }
    }

    /*
        保存历史记录
     */
    saveHistoryList(event) {
        var historyList = [];
        if (this.state.historyList !== undefined) {
            historyList = this.state.historyList;
            if ((this.state.search !== undefined) && (this.state.search !== null) && (this.state.search.length > 0)) {
                // eslint-disable-next-line
                historyList.map((value, index) => {
                    if (value === this.state.search) {
                        historyList.splice(index, 1)
                    }
                })
                historyList.unshift(this.state.search);
            }
        } else {
            historyList.unshift(this.state.search);
        }
        localStorage.setItem("searchHistoryList", JSON.stringify(historyList));
        this.setState({ historyList: historyList })
    }

    handleSearchModeChanged(eventKey, event) {
        var engine = null;
        var engineName = null;
        var engineNormalPrefered = localStorage.getItem('engineNormalPrefered');
        var engineAcademicPrefered = localStorage.getItem('engineAcademicPrefered');
        if (eventKey === "normal") {
            if (engineNormalPrefered !== null) {
                engine = engineNormalPrefered;
                engineName = arr_engineNormalName[arr_engineNormal.indexOf(engineNormalPrefered)]
            } else {
                engine = arr_engineNormal[0];
                engineName = arr_engineNormalName[0];
            }
        } else if (eventKey === "academic") {
            if (engineAcademicPrefered !== null) {
                engine = engineAcademicPrefered;
                engineName = arr_engineAcademicName[arr_engineAcademic.indexOf(engineAcademicPrefered)]
            } else {
                engine = arr_engineAcademic[0];
                engineName = arr_engineAcademicName[0];
            }
        }
        this.setState({ mode: eventKey, engine: engine, engineName: engineName });
    }

    handleDropSearchEngineChanged(eventKey, event) {
        var engineName = null;
        if (this.state.mode === "normal") {
            engineName = arr_engineNormalName[arr_engineNormal.indexOf(eventKey)];
            localStorage.setItem('engineNormalPrefered', eventKey);
        } else if (this.state.mode === "academic") {
            engineName = arr_engineAcademicName[arr_engineAcademic.indexOf(eventKey)];
            localStorage.setItem('engineAcademicPrefered', eventKey);
        }
        this.setState({ engine: eventKey, engineName: engineName });
    }

    handleInputChange(event) {
        this.setState({ search: event.target.value });
    }

    handleSearch(event) {
        this.saveHistoryList();
        this.setState({ isHistoryShow: false });
        var url = null;
        var search = this.state.search;
        if (this.state.search === undefined) {
            search = "";
        }
        if (this.state.engine === "bing") {
            url = "https://www.bing.com/search?q=" + search;
        } else if (this.state.engine === "baidu") {
            url = "https://www.baidu.com/s?wd=" + search;
        } else if (this.state.engine === "google") {
            url = "https://www.google.com/search?q=" + search;
        }

        else if (this.state.engine === "discovery") {
            url = "http://search.ebscohost.com/login.aspx?bquery=" + search + "&direct=true&site=eds-live&scope=site&type=1&custid=ns223535&groupid=main&profid=eds_proxy&mode=bool&lang=en&authtype=ip,guest"
        } else if (this.state.engine === "microsoft-academic") {
            url = "https://academic.microsoft.com/search?q=" + search;
        } else if (this.state.engine === "google-scholar") {
            url = "https://scholar.google.com/scholar?q=" + search;
        } else if (this.state.engine === "bing-academic") {
            url = "https://www.bing.com/academic/search?q=" + search;
        } else if (this.state.engine === "baidu-xueshu") {
            url = "https://xueshu.baidu.com/s?wd=" + search;
        }

        this.setState({ isHistoryShow: false })
        window.open(encodeURI(url));
        event.preventDefault();
    }

    render() {
        var dropdownLists = null;
        if (this.state.mode === "normal") {
            // dropdownLists =  arr_engineNormal
            dropdownLists = arr_engineNormal.map((value, index) =>
                <Dropdown.Item key={value} eventKey={value}>{arr_engineNormalName[index]}</Dropdown.Item>
            );
        } else if (this.state.mode === "academic") {
            dropdownLists = arr_engineAcademic.map((value, index) =>
                <Dropdown.Item key={value} eventKey={value}>{arr_engineAcademicName[index]}</Dropdown.Item>
            );
        }

        var historyList = this.state.historyList;
        if (historyList === undefined) {
            historyList = [];
        }
        var historyOverlayCom = null;
        if (this.state.isHistoryShow) {
            historyOverlayCom = (
                <div className='list'
                    onMouseOver={e => {
                        this.setState({ mouseOnList: true });
                    }}
                    onMouseOut={e => {
                        this.setState({ mouseOnList: false });
                        if (!this.state.inputFocus) {
                            this.setState({ isHistoryShow: false });
                        }
                    }}
                >
                    <div className='resultList'>
                        <ul className='ul_style' >
                            {
                                // eslint-disable-next-line
                                historyList.map((value, index) => {
                                    //最多同时展示8条数据
                                    if (index < 8) {
                                        return (
                                            <li key={index}>
                                                <div className='base'>
                                                    <span className='left' onClick={e => {
                                                        this.setState({ search: value }, () => { this.handleSearch(e); })
                                                    }}
                                                    >
                                                        {value}
                                                    </span>
                                                    <div className='right'>
                                                        <Button variant="link" style={{ color: "#191e56" }}
                                                            onClick={(e) => {
                                                                const list = JSON.parse(localStorage.getItem("searchHistoryList"));
                                                                const index1 = list.indexOf(value);
                                                                if (index1 > -1) {
                                                                    list.splice(index1, 1);
                                                                }
                                                                this.setState({ historyList: list })
                                                                localStorage.setItem("searchHistoryList", JSON.stringify(list));
                                                            }}>删除</Button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                }
                                )}
                        </ul>
                    </div>
                </div>
            );
        }

        //展示搜索历史
        return (
            <div>
                <Tabs id="search-box-tab"
                    activeKey={this.state.mode}
                    onSelect={this.handleSearchModeChanged}>
                    <Tab eventKey="normal" title="普通模式" />
                    <Tab eventKey="academic" title="学术模式" />
                </Tabs>
                <Form onSubmit={this.handleSearch}>
                    <Form.Group className='formGroup'>
                        <InputGroup className="mb-3">
                            <DropdownButton as={InputGroup.Prepend}
                                onSelect={this.handleDropSearchEngineChanged}
                                variant="search-drop"
                                title={this.state.engineName}
                                id="search-box-dropdown">
                                {dropdownLists}
                            </DropdownButton>
                            <Form.Control id="search-box-input"
                                autoComplete='off'
                                onChange={this.handleInputChange}
                                value={this.state.search}
                                onFocus={this.handleSearchInputFocus}
                                onBlur={this.handleSearchInputBlur}
                            />
                            <Button variant="primary"
                                id="search-box-button"
                                type="summit">
                                搜索
                            </Button>

                        </InputGroup>
                    </Form.Group>
                    {historyOverlayCom}
                </Form>
            </div>
        )

    }
}

export { SearchBox }