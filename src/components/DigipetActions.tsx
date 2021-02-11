/**
 * Represents data which is used to make the UI for a DigipetAction.
 */
export interface DigipetAction {
  /** The action name */
  name: string;
  /** The callback to trigger */
  handler?(e: React.MouseEvent): void;
}

interface Props {
  actions: DigipetAction[];
}

function DigipetActions({ actions }: Props) {
  const defaultHandler = () =>
    window.alert(
      "Handler not implemented yet (so using this generic default one)!"
    );

  return (
    <>
      {actions.map(({ name, handler = defaultHandler }) => (
        // using destructuring with a default value
        <button key={name} onClick={handler}>
          {name}
        </button>
      ))}
    </>
  );
}

export default DigipetActions;
