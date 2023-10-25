import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';
export default function Genres({ control }: any) {
    return (
        <Form.Item label='Genres'>
            <Controller
                name='genres'
                control={control}
                render={({ field }) => (
                    <Select
                        mode='multiple'
                        style={{ width: '100%' }}
                        {...field}
                    >
                        <Select.Option value='action'>Action</Select.Option>
                        <Select.Option value='adventure'>
                            Adventure
                        </Select.Option>
                        <Select.Option value='animation'>
                            Animation
                        </Select.Option>
                        <Select.Option value='comedy'>Comedy</Select.Option>
                        <Select.Option value='crime'>Crime</Select.Option>
                        <Select.Option value='fiction'>Fiction</Select.Option>
                        <Select.Option value='sci-fi'>Sci-Fi</Select.Option>
                        <Select.Option value='thriller'>Thriller</Select.Option>
                        <Select.Option value='other'>Other</Select.Option>
                    </Select>
                )}
            />
        </Form.Item>
    );
}
