import React from "react";
import {usePage} from "@inertiajs/inertia-react";
//@ts-ignore
import useRoute from "@/Hooks/useRoute";
//@ts-ignore
import AppLayout from '../../../Layouts/AppLayout';
//@ts-ignore
import {HStack} from "@chakra-ui/react";

const Index = () => {
    const page = usePage<Object | any>();
    const route = useRoute();
    return (
        <AppLayout
            title="Users"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            )}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        {page.props.editingUser.email}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
export default Index;
