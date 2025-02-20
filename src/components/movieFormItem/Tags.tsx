import { Select, Form } from 'antd';
import type { SelectProps } from 'antd';
import { Controller, useController } from 'react-hook-form';
const options: SelectProps['options'] = [];

// for (let i = 10; i < 36; i++) {
//     options.push({
//         value: i.toString(36) + i,
//         label: i.toString(36) + i,
//     });
// }

export const Tags = ({ control, name }: any) => {
    return (
        <Form.Item label='Tags' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        mode='tags'
                        style={{ width: '100%' }}
                        tokenSeparators={[',']}
                        // options={options}
                        {...field}
                    />
                )}
            />
        </Form.Item>
    );
};
