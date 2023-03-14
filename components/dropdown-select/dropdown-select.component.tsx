import { useEffect, useRef, useState } from 'react';
import styles from './DropdownSelect.module.scss';

export type SelectOption = {
  id: string | number;
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  label: string;

  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const DropdownSelect = ({
  multiple,
  value,
  onChange,
  label,

  options,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (
        value.find(
          (currentOption) =>
            JSON.stringify(currentOption) === JSON.stringify(option)
        )
      ) {
        onChange(
          value.filter((o) => JSON.stringify(o) !== JSON.stringify(option))
        );
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.dropdown_container_wrapper}
    >
      <p className={styles.label_container}>{label}</p>
      <div className={styles.dropdown_container}>
        <span className={styles.value_container}>
          {multiple ? (
            <div className={styles.values}>
              {value.map((v) => (
                <button
                  key={v.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                  className={styles.option_badge}
                >
                  {v.label}
                  <span className={styles.remove_btn}>&times;</span>
                </button>
              ))}
            </div>
          ) : (
            value?.label
          )}
          <div className={styles.buttons}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                clearOptions();
              }}
              type="button"
              className={styles.clear_btn}
            >
              &times;
            </button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
          </div>
        </span>

        <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
          {options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.id}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ''
              } ${index === highlightedIndex ? styles.highlighted : ''}`}
            >
              <span className={styles.label_text}>{option.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownSelect;
