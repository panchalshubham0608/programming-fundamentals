# check if usage is correct
if [ $# -ne 2 ]; then
    echo "Usage: $0 <judge> <executable>"
    exit 1
fi

# cleanup
rm *.class

# compile
javac $1.java
if [ $? -ne 0 ]; then
    echo "Compilation failed"
    exit 1
fi

# run
java $1 $2
if [ $? -ne 0 ]; then
    echo "Execution failed"
    exit 1
fi

# cleanup
rm *.class
