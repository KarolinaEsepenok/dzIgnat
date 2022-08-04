import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i)=>(
        <option className={s.options} key={0 + '-' + i} value={o}>{o}</option>)
    ) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }
    const selectClassName = s.select + (
        className
        ? '' + className
            : ''
    )

    return (
        <select className={selectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
