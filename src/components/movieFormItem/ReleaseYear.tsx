import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
export default function ReleaseYear({ control, name }: any) {
    return (
        <Form.Item label='Release Year' name={name}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <DatePicker
                        picker='year'
                        placeholder={dayjs().year().toString()}
                        {...field}
                    />
                )}
            />
        </Form.Item>
    );
}
