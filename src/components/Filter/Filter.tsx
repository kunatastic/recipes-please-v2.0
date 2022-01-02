import React, { useState } from 'react';

interface IProps {
  FilterItems: Array<string>;
  Identifier: string;
}

const Filter = (props: IProps): JSX.Element => {
  const { FilterItems, Identifier } = props;
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  function itemHandler(item: string) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <h1>{Identifier}</h1>

      {FilterItems.map((item: string, index: number) => {
        return (
          <>
            <div key={index}>
              {item}
              <button onClick={() => itemHandler(item)}>
                {selectedItems.includes(item) ? '+' : '-'}
              </button>
            </div>
          </>
        );
      })}

      <h1>Selected Items are here bitch</h1>

      {selectedItems.map(selection => (
        <p>{selection}</p>
      ))}
    </>
  );
};

export default Filter;
