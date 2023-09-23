"use client";
import Button from "@/components/Button";
import { Pagination } from "../../components/Pagination";
import { Table, Th, Thead, Tr, Tbody, Td } from "../../components/Table";
import useBookModule from "./lib";
import { Drawer } from "@/components/Drawer";
import Filter from "./module/Filter";
import { useDisclosure, useConfirmDelete } from "@/hook";
import { useRouter } from "next/navigation";
import { DeleteButton, EditButton } from "@/components/ButtonAction";
import Swal from "sweetalert2";

const Book = () => {
  const { useBookList, useDeleteBook } = useBookModule();
  const { mutate, isLoading } = useDeleteBook();
  const router = useRouter();
  const handleDelete = useConfirmDelete({
    onSubmit: (id) => {
      mutate(id);
    },
  });

  const {
    data,
    isFetching,
    isError,
    params,
    setParams,
    handleFilter,
    handleClear,
    handlePageSize,
    handlePage,
  } = useBookList();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer
        onClose={onClose}
        onClear={handleClear}
        onSubmit={handleFilter}
        title="Filter Buku"
        isOpen={isOpen}
      >
        <Filter params={params} setParams={setParams} />
      </Drawer>
      <section className=" py-10 overflow-auto ">
        <section className="flex items-center justify-between ">
          <Button
            width="sm"
            onClick={onOpen}
            colorSchema="blue"
            title="Filter"
          />
        <div className="space-x-5">
        <Button
            onClick={() => {
              router.push("/book/tambah");
            }}
            width="sm"
            colorSchema="red"
            title="tambah"
          />
          <Button
            onClick={() => {
              router.push("/book/tambah-bulk");
            }}
            width="sm"
            colorSchema="green"
            title="tambah bulk"
          />
        </div>
        </section>

        <section className="h-full w-full mt-5 ">
          <Table
            isFetching={isFetching}
            isEmpty={data?.data?.length === 0}
            isError={isError}
          >
            <Thead>
              <Tr>
                <Th scope="col">
                  <div className="flex items-center gap-x-3">
                    <input
                      type="checkbox"
                      className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                    />
                  </div>
                </Th>
                <Th scope="col">No</Th>
                <Th scope="col">Title</Th>
                <Th scope="col">Author</Th>
                <Th scope="col">Year</Th>
                <Th scope="col">Created At</Th>
                <Th scope="col">Updated At</Th>
                <Th scope="col">Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.data.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                    </Td>
                    <Td>{(params.page - 1) * params.pageSize + index + 1}</Td>
                    <Td>
                      <span>{item.title}</span>
                    </Td>
                    <Td>
                      <span>{item.author}</span>
                    </Td>
                    <Td>
                      <span>{item.year}</span>
                    </Td>
                    <Td>
                      <span>{item.created_at}</span>
                    </Td>
                    <Td>
                      <span>{item.updated_at}</span>
                    </Td>
                    <Td>
                     <span className="flex items-center space-x-2">
                     <DeleteButton
                        isLoading={isLoading}
                        onClick={() => {
                          handleDelete(item.id || 0);
                        }}
                      />
                      <EditButton
                        onClick={() => {
                          router.push(`book/${item.id}/edit`);
                        }}
                      />
                     </span>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>

          <Pagination
            page={params.page}
            pageSize={params.pageSize}
            handlePageSize={handlePageSize}
            handlePage={handlePage}
            pagination={data?.pagination}
          />
        </section>
      </section>
    </>
  );
};

export default Book;
