<template>
    <v-container fluid>
        <v-layout row justify-center>
            <v-flex md4 sm6 xs10>
                <v-card>
                    <v-card-title>
                        <div>
                            <h2 class="primary--text">Authorization</h2>
                        </div>
                    </v-card-title>
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-text-field
                                        label="Login"
                                        v-model="login"
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        label="Password"
                                        v-model="password"
                                        type="password"
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-spacer></v-spacer>
                            <v-btn color="primary">Sign-In</v-btn>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                login: '',
                password: '',
                rules: {
                    required: (value) => !!value || 'Required.',
                }
            }
        }
    }
</script>

