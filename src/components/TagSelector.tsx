import React, { useState } from 'react';
import styled from '@emotion/styled';

const TagSelectorContainer = styled.div`
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .tag {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 7px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      margin: 0.25rem;
      transition: all 250ms ease;
      font-size: 16px !important;
      border-width: 1px;
      
      &.small {
        padding: 0.25rem 1rem;
      }

      &:hover:not(.active) {
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1), 0 0 6px rgba(0, 0, 0, 0.05) !important;
      }

      &.active {
        background: #fd7e14;
        color: white;
        
        &:hover {
          background: #fd7e14;
        }
      }
    }
  }

  &.fullWidth .tag-container {
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;

    .tag {
      width: 100%;
      margin: 0;
      padding: 0.75rem 1rem;
      border-radius: 0;
    }
  }
`;

type ValueType = {
    value: string,
    label: string,
}

type TagSelectorProps = {
    value: ValueType[],
    onChange: (val: ValueType | ValueType[]) => void,
    small?: boolean,
    options: ValueType[],
    isClearable?: boolean,
    multiple?: boolean,
    fullWidth?: boolean
}

const TagSelector = (props: TagSelectorProps) => {
    const [tags, setTags] = useState([]);

    const handleTagClick = (_tag) => {
        if(props.multiple) {
            if(tags.includes(_tag.value)) {
                const _tags = [...tags];
                const index = tags.indexOf(_tag.value);
                _tags.splice(index, index + 1);
                setTags(_tags);
                props.onChange(_tags);
            } else {
                const _tags = [...tags, _tag.value];
                setTags(_tags);
                props.onChange(_tags);
            }
        } else if(props.isClearable &&  !props.value && _tag.value === props.value) {
            props.onChange(props.options[0]);
            props.onChange(props.options[0]);
        } else {
            props.onChange(_tag);
            props.onChange(_tag);
        }
    };

    const generateClassName = ({ value: val }) => {
        let _class = props.small ? 'small' : '';
        if(!props.fullWidth) _class += ' shadow-sm';
        if(props.multiple && tags.includes(val)) _class += ' active';
        // @ts-ignore
        if(!props.multiple && props.value?.value === val) _class += ' active';
        return _class;
    };

    return <TagSelectorContainer className={props.fullWidth ? 'fullWidth' : ''}>
        <div className={`tag-container ${props.fullWidth ? 'shadow-sm' : ''}`}>
            {props.options.map(opt =>
                <div
                    key={opt.value}
                    className={`tag ${generateClassName(opt)}`}
                    onClick={() => handleTagClick(opt)}
                >
                    {opt.label}
                </div>
            )}
        </div>
    </TagSelectorContainer>;
};

export default TagSelector;