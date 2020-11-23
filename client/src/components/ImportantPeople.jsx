import { useEffect, useRef, useState } from 'react'
import { FaSmile } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { VscLoading } from 'react-icons/vsc'
import axios from 'axios'

let people = [
    {
        name: "Frank Ltarnam",
        occupation: "CEO",
        image: "../../assets/images/gaetan-houssin.jpg",
        desc: ""
    },
    {
        name: "Bob Shefley",
        occupation: "UI/UX Designer",
        image: "../../assets/images/nicolas-lebarreau.jpg",
        desc: ""
    },
    {
        name: "Jason Stewars",
        occupation: "Full-Stack Developer",
        image: "../../assets/images/jerome-mahuet.jpg",
        desc: ""
    },
    {
        name: "Sabrina Rachel",
        occupation: "Marketing",
        image: "../../assets/images/manuela-faveri.jpg",
        desc: ""
    },
    {
        name: "Marissa Lawren",
        occupation: "Customer Support",
        image: "../../assets/images/darlene-chabrat.jpg",
        desc: ""
    },
    {
        name: "Romane Regad",
        occupation: "Jr UI/UX Designer",
        image: "../../assets/images/romane-regad.jpg",
        desc: ""
    },
    {
        name: "Tania Ferreira",
        occupation: "Business Analyst",
        image: "../../assets/images/tania-ferreira.jpg",
        desc: ""
    }
]

const ModalAddPeople = ({ onclick }) => {
    const [data, setData] = useState({
        name: "",
        occupation: "",
        images: "",
        desc: ""
    })

    const [file, setFile] = useState(''); 
    const [filename, setFilename] = useState('');
    // storing the recived file from backend
    const [getData, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); 
    const el = useRef();

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        setFilename(file.name)
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('http://localhost:4500/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            getFile({ name: res.getData.name,
                path: 'http://localhost:4500' + res.getData.path
            })
        }).catch(err => console.log(err))
        
        people.push({
            name: data.name,
            occupation: data.occupation,
            image: `../../assets/images/${filename}`,
            desc: data.desc
        })
        

        onclick()
    }

    return (
        <div className="modal__add__people">
            <div className="modal">
                <div className="title">
                    <h2>Add people</h2>
                    <img src="../../assets/images/cancel.svg" alt="close" onClick={onclick}/>
                </div>
                <div className="upload">
                    <form>
                        <input type="file" name="file" id="file" className="inputfile" onChange={handleChange}/>
                        <label htmlFor="file">
                            <img src="../../assets/images/user.svg" alt=""/>
                            <span>
                                <img src="../../assets/images/pencil.svg" alt="" width="14"/>
                            </span>
                        </label>
                    </form>
                </div>
                <div className="form">
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={e => setData({...data, name: e.target.value})}/>
                    </div>
                    <div className="position">
                        <label htmlFor="name">Position</label>
                        <input type="text" id="position" name="position" onChange={e => setData({...data, occupation: e.target.value})}/>
                    </div>
                    <div className="desc">
                        <label htmlFor="desc">Description</label>
                        <textarea onChange={e => setData({...data, desc: e.target.value})} />
                    </div>
                </div>
                <div className="action">
                    <button className="cancel" onClick={onclick}>Cancel</button>
                    <button className="save" onClick={uploadFile}>Save</button>
                </div>
            </div>
        </div>
    )
}


const ModalEditPeople = ({ onclick, show, id }) => {
    const [dataPeople, setDataPeople] = useState(people)
    const [data, setData] = useState({
        name: show.name,
        occupation: show.occupation,
        image: show.image,
        desc: show.desc
    })

    const [file, setFile] = useState(''); 
    const [filename, setFilename] = useState('');
    // storing the recived file from backend
    const [getData, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); 
    const el = useRef();

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        setFilename(file.name)
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('http://localhost:4500/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            getFile({ name: res.getData.name,
                path: 'http://localhost:4500' + res.getData.path
            })
        }).catch(err => console.log(err))
        
        setDataPeople(people[id].name = data.name)
        setDataPeople(people[id].occupation = data.occupation)
        setDataPeople(people[id].image = `../../assets/images/${filename}`)
        setDataPeople(people[id].desc = data.desc)

        onclick()
    }


    // const handleUpdate = () => {
        
    //     onclick()
    // }

    return (
        <div className="modal__add__people">
            <div className="modal">
                <div className="title">
                    <h2>Edit people</h2>
                    <img src="../../assets/images/cancel.svg" alt="close" onClick={onclick}/>
                </div>
                <div className="upload">
                    <form>
                        <input type="file" name="file" id="file" className="inputfile" onChange={handleChange}/>
                        <label htmlFor="file">
                            <div 
                                style={{
                                    backgroundImage: `url(${show.image})`,
                                    height: 100,
                                    width: 100,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: people[id].image === "../../assets/images/user.svg" ? 30 : 'cover',
                                    backgroundPosition: people[id].image === "../../assets/images/user.svg" ? 'center' : 'unset',
                                    borderRadius: '50%'
                                }}
                            />
                            <span>
                                <img src="../../assets/images/pencil.svg" alt="" width="14"/>
                            </span>
                        </label>
                    </form>
                    <p 
                        style={{
                            textAlign: 'center', 
                            color: 'red', 
                            cursor: 'pointer'
                        }}
                        onClick={() => setDataPeople(people[id].image = "../../assets/images/user.svg")}
                    ><BsTrash /> Delete picture</p>
                </div>
                <div className="form">
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={data.name}
                            onChange={e => setData({...data, name: e.target.value})}
                        />
                    </div>
                    <div className="position">
                        <label htmlFor="name">Position</label>
                        <input 
                            type="text" 
                            id="position" 
                            name="position" 
                            value={data.occupation}
                            onChange={e => setData({...data, occupation: e.target.value})}
                        />
                    </div>
                    <div className="desc">
                        <label htmlFor="desc">Description</label>
                        <textarea 
                            value={data.desc}
                            onChange={e => setData({...data, desc: e.target.value})}
                        />
                    </div>
                </div>
                <div className="action">
                    <button className="cancel" onClick={onclick}>Cancel</button>
                    <button className="save" onClick={uploadFile}>Save</button>
                </div>
            </div>
        </div>
    )
}

const ModalDetailPeople = ({id, onclick}) => {
    return (
        <div className="modal__detail">
            <div className="data">
                <img src="../../assets/images/cancel.svg" onClick={onclick}/>
                <div className="img"><img src={id.image} alt={id.name}/></div>
                <div className="identity">
                    <strong>{id.name}</strong>
                    <div className="occupation">{id.occupation}</div>
                    <div className="desc">{id.desc}</div>
                </div>
            </div>
        </div>
    )
}

const ImportantPeople = () => {
    const [id, setId] = useState([])
    const [modalAddPeopleImportant, setModalAddPeopleImportant] = useState(false)
    const [modalEditPeopleImportant, setModalEditPeopleImportant] = useState(false)
    const [edit, setEdit] = useState(false)
    const [modalDetailPeopleImportant, setModalDetailPeopleImportant] = useState(false)
    const [dataPeople, setDataPeople] = useState(people)
    const [detailPersonId, setDetailPersonId] = useState(undefined)

    const handleSelected = e => setId(prevState => [...prevState, e.target.value])
    
    const result = id.map((x) => { 
        return parseInt(x, 10); 
    });
    
    const handleDeleteSelected = () => {    
        people = people.filter(function(value, index) {
            return result.indexOf(index) === -1;
        })   
        setDataPeople(people)
    }

    return (
        <>
            {modalAddPeopleImportant && <ModalAddPeople onclick={() => setModalAddPeopleImportant(false)} />}
            {modalEditPeopleImportant && <ModalEditPeople 
                onclick={() => setModalEditPeopleImportant(false)}
                show={people[detailPersonId]}
                id={detailPersonId}
            />}
            {modalDetailPeopleImportant && <ModalDetailPeople 
                id={people[detailPersonId]} 
                onclick={() => setModalDetailPeopleImportant(false)}
            />}
            <div className="importantpeople">
                <div className="heading">
                    <span className="title">
                        <div>
                            <span className="icon__smile">
                                <FaSmile />
                            </span>
                        </div>
                        <h2>Our important people is listed here</h2>
                    </span>
                    <div className="action">
                        {
                            edit ? (
                                <>
                                    <span onClick={() => setEdit(false)}>Cancel</span>
                                    <span className="delete" onClick={handleDeleteSelected}><BsTrash /></span>
                                </>
                            ) : (
                                <>
                                    <button className="edit" onClick={() => setEdit(true)}>Edit</button>
                                    <button className="add" onClick={() => setModalAddPeopleImportant(true)}>Add</button>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="people">
                    {
                        people.map((person, index) => {
                            return (
                                <div 
                                    className="person" 
                                    key={index} 
                                    onClick={() => {
                                        setDetailPersonId(index)
                                    }}
                                >
                                    { edit ? <input 
                                        type="checkbox" 
                                        name="select" 
                                        id="select" 
                                        value={index} 
                                        onChange={handleSelected} /> 
                                        : null}
                                    <img src="../../assets/images/pencil.svg" alt="" onClick={() => setModalEditPeopleImportant(true)}/>
                                    <div className="identity">
                                        <img src={person.image} alt={person.name} width="240"/>
                                        <div className="info" onClick={() => setModalDetailPeopleImportant(true)}>
                                            <strong className="name">{person.name}</strong>
                                            <div className="occupation">{person.occupation}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ImportantPeople