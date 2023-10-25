import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
export default function ReleaseYear({ control }: any) {
    return (
        <Form.Item label='Release Year'>
            <Controller
                name='releaseYear'
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
