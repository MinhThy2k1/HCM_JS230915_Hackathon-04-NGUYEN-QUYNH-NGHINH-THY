import { PrismaClient } from '@prisma/client';
import { todo } from '../common/interface';

const prisma = new PrismaClient();

export const todoModel = {
    create: async function (data: todo) {
        try {
            const todo = await prisma.todo.create({
                data: {
                    ...data,
                    status: "uncompleted"
                },
            });
            return {
                status: true,
                message: 'Tạo todo thành công',
                data: todo,
            };
        } catch (err) {
            let message = (err as Error).message || 'Tạo todo thất bại';
            return {
                status: false,
                message: message,
                data: null,
            };
        }
    },
    findAll: async () => {
        try {
            let data = await prisma.todo.findMany();
            return {
                status: true,
                message: 'Tìm thành công',
                data,
            };
        } catch (err) {
            return {
                status: false,
                data: null,
                message: 'Tìm thất bại',
            };
        }
    },
    edit: async (id: number, todo: todo) => {
        try {
            let data = await prisma.todo.update({
                where: {
                    id,
                },
                data: {
                    ...todo,
                    status: "completed"
                },
            });
            return {
                status: true,
                data,
                message: 'Sửa thành công',
            };
        } catch (err) {
            return {
                status: false,
                data: null,
                message: 'Sửa thất bại',
            };
        }
    },
    delete: async (id: number) => {
        try {
            let data = await prisma.todo.delete({
                where: {
                    id,
                },
            });
            return {
                status: true,
                data,
                message: 'đã xóa todo',
            };
        } catch (err) {
            console.log('err', err);
            return {
                status: false,
                data: null,
                message: 'Xóa todo fail',
            };
        }
    },
};