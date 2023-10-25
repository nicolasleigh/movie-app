import { Select, Form } from 'antd';
import type { SelectProps } from 'antd';
import { Controller } from 'react-hook-form';
const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}

export const Tags = ({ control, setValue }: any) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setValue('tags', value);
    };
    return (
        <Form.Item label='Tags'>
            <Controller
                name='tags'
                control={control}
                render={() => (
                    <Select
                        mode='tags'
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        tokenSeparators={[',']}
                        options={options}
                    />
                )}
            />
        </Form.Item>
    );
};
