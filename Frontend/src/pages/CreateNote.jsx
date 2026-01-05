export default function CreateNote() {
  return (
    <div>
      <h1>Create New Note</h1>
      <form>
        <input type="text" placeholder="Note Title" />
        <textarea placeholder="Note Content"></textarea>
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}
