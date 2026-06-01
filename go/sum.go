package main

import "fmt"

func main() {
	fmt.Println(sum(3, 5))
}

func sum(a, b int) int {
	return a + b
}

func sub(a, b int) int {
	return a - b
}

func sumX(a, b int) int {
	return a + b + a
}

func mult(a, b int) int {
	return a * b
}
