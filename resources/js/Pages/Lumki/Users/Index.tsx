import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
//@ts-ignore
import useRoute from "@/Hooks/useRoute";
//@ts-ignore
import AppLayout from '../../../Layouts/AppLayout';
import {HStack, Link} from "@chakra-ui/react";

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
                        <table className="min-w-full w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Roles
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {page.props?.usersData?.map((user: Object | any, index: number) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {user.id}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 border border-gray-100 rounded-full"
                                                    src={user.profile_photo_path !== null ? page.props.rootURL + '/' + user.profile_photo_path : user.profile_photo_url}
                                                    alt=""/>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-md font-semibold text-gray-900">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`${user?.email_verified_at === null ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} px-2.5 py-1 inline-flex text-sm leading-5 font-semibold rounded-lg`}>
                                            {user?.email_verified_at === null ? 'unverified' : 'verified'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-gray-500">
                                        {user.roles?.length !== 0 ? (
                                            <HStack spacing={2}>
                                                {user.roles?.map((role: any, index: any) => (
                                                    <span key={index}
                                                          className="bg-blue-100 text-blue-700 px-2.5 py-1 inline-flex text-sm leading-5 font-semibold rounded-lg">
                                                        {role.name}
                                                    </span>
                                                ))}
                                            </HStack>
                                        ) : null}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <HStack spacing={2}>
                                            <InertiaLink href={route('users.edit', user.id)}
                                                  className="bg-gray-700 text-white p-2 px-4 rounded-lg hover:bg-gray-900">Edit</InertiaLink>
                                            {user.canBeImpersonated && !page.props.isImpersonating && !user.isAdmin ? (
                                                <a href={route('impersonate', user.id)}
                                                   className="bg-gray-700 text-white p-2 px-4 rounded-lg hover:bg-gray-900">
                                                    {page.props.isImpersonating ? 'Leave Impersonation' : 'Impersonate'}
                                                </a>
                                            ) : null}
                                        </HStack>
                                    </td>
                                </tr>))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
export default Index;
