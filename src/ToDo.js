import "./styles.scss";

function ToDo() {
    return (
        <div className="ToDo">
            <h1> ToDos </h1>
            <div className="Add">
                <div id="header-add">Add a Task</div>
                <div className="content-add">
                    <hr />
                    <p>Item</p>
                    <input
                        type="text"
                        id="input-add"
                        placeholder="Nhập Task...."
                    />{" "}
                    <br />
                    <button type="button">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
