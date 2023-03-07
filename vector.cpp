#include <iostream>
#include <assert.h>
using namespace std;
template <class T>
class Vector {
private:
	T* arr{ nullptr };
	int size{ 0 };
	int capacity{ };
	void expand_capacity();

public:
	Vector(int size);
	~Vector();

	int get_size();
	T get_front();
	T get_back();
	T get(int idx);
	void set(int idx, T val);
	void print();
	int find(T value);
	void push_back(T value);
	void right_rotate();
	void left_rotate();
};

template <class T>
void Vector<T>::expand_capacity() {
	capacity *= 2;
	cout << "Expand capacity to " << capacity << "\n";
	T* arr2 = new T[capacity] {};
	for (int i = 0; i < size; ++i)
		arr2[i] = arr[i];	
	swap(arr, arr2);
	delete[] arr2;
}
template <class T>
Vector<T>::Vector(int size) :
	size(size) {
	if (size < 0)
		size = 1;
	capacity = size + 10;
	arr = new T[capacity] {};
}
template <class T>
Vector<T>::~Vector() {
	delete[] arr;
	arr = nullptr;
}
template <class T>
int Vector<T>::get_size() {
	return size;
}
template <class T>
T Vector<T>::get(int idx) {
	assert(0 <= idx && idx < size);
	return arr[idx];
}
template <class T>
void Vector<T>::set(int idx, T val) {
	assert(0 <= idx && idx < size);
	arr[idx] = val;
}
template <class T>
void Vector<T>::print() {
	for (int i = 0; i < size; ++i)
		cout << arr[i] << " ";
	cout << "\n";
}
template <class T>
int Vector<T>::find(T value) {
	for (int i = 0; i < size; ++i)
		if (arr[i] == value)
			return i;
	return -1;
}
template <class T>
T Vector<T>::get_front() {
	return arr[0];
}
template <class T>
T Vector<T>::get_back() {
	return arr[size - 1];
}
template <class T>
void Vector<T>::push_back(T value) {
	if (size == capacity)
		expand_capacity();
	arr[size++] = value;
}
template <class T>
void Vector<T>::right_rotate() {
	T last_element = arr[size - 1];
	for (int i = size - 2; i >= 0; i--)
		arr[i + 1] = arr[i];
	arr[0] = last_element;
}
template <class T>
void Vector<T>::left_rotate() {
	T first_element = arr[0];
	for (int i = 1; i < size; i++)
		arr[i - 1] = arr[i];
	arr[size - 1] = first_element;
}
int main() {

	int n = 2;
	Vector<int> v(n);
	for (int i = 0; i < n; ++i)
		v.set(i, i);
	for (int i = 0; i < 15; ++i)
		v.push_back(i + 10);
	v.right_rotate();
	v.right_rotate();
	v.left_rotate();
	v.print();
	return 0;
}
